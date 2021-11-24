
const path = require('path');
const File = require('../models/file');

module.exports = {

 uploadFile: async (req, res, next) => {
    const remove =  await path.join(__dirname, '..', 'UploadedFiles')
    const relPath =  await req.file.path.replace(remove,'')
    const newFile =  await new File(req.body)
    newFile.path = await relPath;
    res.status(200).json(relPath);
  }

}
