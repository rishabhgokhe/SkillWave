import multer from 'multer';

const storage = multer.memoryStorage();

export const uploadSingleFile = multer({storage}).single("file");