// used to catch error istead of using try-catch block
// here next is a function executed when function handles error

function catchAsyncError(passedFunction) {
  return (req, res, next) => {
    Promise.resolve(passedFunction(req, res, next)).catch(next);
  };
}

export default catchAsyncError;
