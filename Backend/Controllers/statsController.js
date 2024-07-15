import catchAsyncError from '../Middlewares/catchAsyncError';
import Statistics from '../Models/StatsAnalysisModal';

export const getDashboardStats = catchAsyncError(async (req, res, next) => {
  const stats = await Statistics.find({}).sort({ createdAt: 'desc' }).limit(12);
  const statsData = [];

  for (let i = 0; i < stats.length; i++) {
    statsData.unshift(stats[i]);
  }

  const remainingStatsSize = 12 - statsData.length;

  for (let i = 0; i < remainingStatsSize; i++) {
    statsData.unshift({
      users: 0,
      subscription: 0,
      views: 0,
    });
  }

  const userCount = statsData[11].users;
  const subscriptionCount = statsData[11].subscription;
  const viewsCount = statsData[11].views;

  let userIncreasded = true,
    viewsIncreased = true,
    subscriptionProfit = true;
  let userPercentage = 0,
    viewsPercentage = 0,
    subscriptionPercentage = 0;

  if (statsData[10].users === 0) userPercentage = userCount * 100;
  if (statsData[10].views === 0) viewsPercentage = viewsCount * 100;
  if (statsData[10].subscription === 0)
    subscriptionPercentage = subscriptionCount * 100;
  else {
    const difference = {
      users: statsData[11].users - statsData[10].users,
      views: statsData[11].views - statsData[10].views,
      subscription: statsData[11].subscription - statsData[10].su,
    };

    userPercentage = (difference.users / statsData[10].users) * 100;
    viewsPercentage = (difference.views / statsData[10].views) * 100;
    subscriptionPercentage =
      (difference.subscription / statsData[10].subscription) * 100;

    if (userPercentage < 0) userIncreasded = false;
    if (viewsPercentage < 0) viewsIncreased = false;
    if (subscriptionPercentage < 0) subscriptionProfit = false;
  }

  res.status(200).json({
    success: true,
    stats: statsData,
    userCount,
    subscriptionCount,
    viewsCount,
  });
});
