const updateBadgeData = {
  major: {
    title: 'major',
    color: 'bg-orange-500',
  },
  minor: {
    title: 'minor',
    color: 'bg-amber-500',
  },
  bug: {
    title: 'bug fixes',
    color: 'bg-red-500',
  },
  feature: {
    title: 'new feature',
    color: 'bg-pink-500',
  },
  improvement: {
    title: 'improvement',
    color: 'bg-lime-500',
  },
  hotfix: {
    title: 'hotfix',
    color: 'bg-indigo-500',
  },
  performance: {
    title: 'performance',
    color: 'bg-purple-500',
  },
};

export const ReleaseNotesData = [
  {
    version: '0.1.6',
    date: '2024-08-17',
    badge: {
      title: `${updateBadgeData.major.title} | ${updateBadgeData.feature.title} | ${updateBadgeData.improvement.title}`,
    },
    notes: [
      'Added animations from animease npm package',
    ],
  },
  {
    version: '0.1.5',
    date: '2024-07-26',
    badge: {
      title: `${updateBadgeData.feature.title}`,
    },
    notes: [
      'Added new Release Notes page for tracking the release versions',
      'New note block added to the top of the homepage for announcements',
    ],
  },
  {
    version: '0.1.4',
    date: '2024-07-15',
    badge: {
      title: `${updateBadgeData.improvement.title}`,
    },
    notes: [
      'Updated README.md with improved contact, new banner and table of contact',
      'Created LICENSE and CODE_OF_CONDUCT',
    ],
  },
  {
    version: '0.1.3',
    date: '2024-06-30',
    badge: {
      title: `${updateBadgeData.minor.title} | ${updateBadgeData.bug.title}`,
    },
    notes: [
      'updated new combined device screenshot in landing page',
      'new form routes added for contact and request forms in formControllers.js',
      'new requestCourseorFeature request added with switch tabs option in ContactMe/RequestFeature,jsx',
    ],
  },
  {
    version: '0.1.2',
    date: '2024-06-22',
    badge: {
      title: `${updateBadgeData.minor.title} | ${updateBadgeData.feature.title} | ${updateBadgeData.bug.title}`,
    },
    notes: [
      'Fixed all Cloudinary supported files',
      'Updated contact info across the web app',
      'Connected Cloudinary to upload profile photos and course posters',
      'New routes added: updateUserRole, deleteUser, deleteProfile',
      'Payment routes and payment controls added with Razorpay - for testing purposes',
      'New screenshot image added with improved homepage responsiveness',
      'Added new yearly subscription payment card',
    ],
  },
  {
    version: '0.1.1',
    date: '2024-06-18',
    badge: {
      title: `${updateBadgeData.major.title} | ${updateBadgeData.feature.title} | ${updateBadgeData.bug.title}`,
    },
    notes: [
      'New course API added - getCourseLecture, addLectures',
      'Cloudinary support added for uploading files to the cloud',
      'Created new multer file for local buffer file storage',
      'New code file added for getting file URI - dataUri.js',
    ],
  },
  {
    version: '0.1.0',
    date: '2024-06-13',
    badge: {
      title: `${updateBadgeData.major.title} | ${updateBadgeData.feature.title} | ${updateBadgeData.bug.title}`,
    },
    notes: [
      'New user routes added - updateProfilePicture, addToPlaylist, removeFromPlaylist',
      'Stuck header to always stay at the top of the screen',
      'Added new portfolio button in the Nav-Bar',
      'Updated About Us page with new terms and conditions component',
      'Improved Explore Our Categories section with new cards about different categories',
      'Improved responsiveness of Explore Course section for iPads',
    ],
  },
  {
    version: '0.0.9',
    date: '2024-06-10',
    badge: {
      title: `${updateBadgeData.major.title} | ${updateBadgeData.feature.title} | ${updateBadgeData.bug.title}`,
    },
    notes: [
      'New user API - getProfile, updateProfile',
      'Created user authentication API - register, login, logout, changePassword, forgetPassword, resetPassword',
      'New middleware added for authenticating user - isAuthenticated (checks if user is logged in or not by using generated cookie)',
      'Created methods on userSchema for authentication process like getJWTToken, comparePassword',
      'Created new code file for sending emails - to be used for feedback, newsletter, and other verifications',
      'Created code for token generation method with an expiry duration of 10 days',
      'Updated user model',
      'Changed the SVG path structure throughout the app',
    ],
  },
  {
    version: '0.0.8',
    date: '2024-06-08',
    badge: {
      title: `${updateBadgeData.major.title} | ${updateBadgeData.feature.title} | ${updateBadgeData.bug.title}`,
    },
    notes: [
      'New Home Page section added - Features sectio, testimonial section, Explore our Category section with animated svg',
      'new fadedown animation added when reloading page',
      'created new api route createcourse',
      'new middleware added for handling error and responce - errorhandler.js, catchAsyncError.js',
      'connected database with app',
      'improved course modal, fixed typo in courseModal',
    ],
  },
  {
    version: '0.0.7',
    date: '2024-06-06',
    badge: {
      title: `${updateBadgeData.major.title} | ${updateBadgeData.feature.title} | ${updateBadgeData.bug.title}`,
    },
    notes: [
      'Work started for app backend - new user and course models',
      'Added link to homepage in header SkillWave text',
      'Fixed deployment issues',
      'New analytical page for admin - new pages for admin course management (AdminCourses.jsx), user statistics table page added for easier analysis (Users.jsx)',
      'Fixed button color mismatch in Sidebar.jsx when tapping on Create Course button',
    ],
  },
  {
    version: '0.0.6',
    date: '2024-06-05',
    badge: {
      title: `${updateBadgeData.major.title} | ${updateBadgeData.feature.title} | ${updateBadgeData.bug.title}`,
    },
    notes: [
      'Added new pages: Dashboard Page, Change Password Page, Profile Page, Update Profile Page',
      'Modern SVG icons added to UI for visual enhancement and easier navigation with support for dark mode',
      'Minor design improvements in the homepage, footer, nav-bar, and subscription page',
      'New dual infinite horizontal brand logo scroll',
    ],
  },
  {
    version: '0.0.5',
    date: '2024-06-03',
    badge: {
      title: `${updateBadgeData.major.title} | ${updateBadgeData.feature.title} | ${updateBadgeData.bug.title}`,
    },
    notes: [
      'Added new pages: Payment Successful and Failed Page, Subscription Page, Page Not Found Page, Notifications Page, Courses Page, and Subscribe Newsletter Page',
      'Added animated SVGs to required pages: Page Not Found, Payment Success, Payment Failed, etc.',
      'Minor improvements in the Home Page and About Us section',
      'Development continuing for the new Profile page',
    ],
  },
  {
    version: '0.0.4',
    date: '2024-06-02',
    badge: {
      title: `${updateBadgeData.major.title} | ${updateBadgeData.feature.title} | ${updateBadgeData.bug.title}`,
    },
    notes: [
      'Added new pages: Register Page, Reset and Forgot Password Page, About Us Page, Contact Us Page, and Request a Course Page',
      'Minor homepage improvement: corrected Explore Course button link path',
      'Created a new custom class for image upload button styling (sign-up-upload-avatar)',
      'Minor improvements in the login page',
      'Added new brand logo SVG to horizontal infinite scroll',
    ],
  },
  {
    version: '0.0.3',
    date: '2024-05-31',
    badge: {
      title: `${updateBadgeData.major.title} | ${updateBadgeData.feature.title} | ${updateBadgeData.bug.title}`,
    },
    notes: [
      'Enhanced header design with a glassmorphism background',
      'Added a new footer with copyright text and social links',
      'Created a new login page - working on backend authentication',
      'Added flip text to the home page for UI enhancement',
      'Created a new "All Courses" page with the route /courses',
      'Fixed Netlify build error - addressed the linting error in the Courses.jsx file by removing unused keyword category',
    ],
  },
  {
    version: '0.0.2',
    date: '2024-05-30',
    badge: {
      title: `${updateBadgeData.major.title} | ${updateBadgeData.feature.title} | ${updateBadgeData.bug.title}`,
    },
    notes: [
      'Deployed app on Netlify',
      'Created a new header for the page - used as a universal header',
      'Added a new drawer menu for easier access to different pages and menus',
      'Updated UI for both light and dark modes with a new dark mode/theme switcher',
    ],
  },
  {
    version: '0.0.1',
    date: '2024-05-29',
    badge: {
      title: `${updateBadgeData.major.title} | ${updateBadgeData.feature.title} | ${updateBadgeData.bug.title}`,
    },
    notes: [
      'Initial Commit',
      'Updated Readme for Project details on Github',
      'New initial Home Page created with Smartphone Responsiveness',
      'Infinite horizontal brand logo scroll added to homepage',
    ],
  },
];
