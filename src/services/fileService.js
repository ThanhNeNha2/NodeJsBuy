const path = require("path");

let uploadSingleFile = async (fileObject) => {
  let now = new Date().getTime();
  uploadPath =
    path.resolve(__dirname, "../public/img/upload") +
    "/" +
    now +
    fileObject.name;

  try {
    await fileObject.mv(uploadPath);
    return {
      status: "success",
      path: now + fileObject.name,
      error: null,
    };
  } catch (error) {
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(error),
    };
  }
};
let uploadMultipleFile = async (filesArr) => {
  try {
    let uploadPath = path.resolve(__dirname, "../public/img/upload");
    let resultArr = [];
    let countSuccess = 0;
    for (let i = 0; i < filesArr.length; i++) {
      //get image extension
      let extName = path.extname(filesArr[i].name);
      //get image's name (without extension)
      let baseName = path.basename(filesArr[i].name, extName);
      //create final path: eg: /upload/your-image.png
      let finalName = `${baseName}-${Date.now()}${extName}`;
      let finalPath = `${uploadPath}/${finalName}`;

      try {
        await filesArr[i].mv(finalPath);
        resultArr.push({
          status: "success",
          path: finalName,
          fileName: filesArr[i].name,
          error: null,
        });
        countSuccess++;
      } catch (err) {
        resultArr.push({
          status: "failed",
          path: null,
          fileName: filesArr[i].name,
          error: JSON.stringify(err),
        });
      }
    }
    return {
      countSuccess: countSuccess,
      detail: resultArr,
    };
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  uploadSingleFile,
  uploadMultipleFile,
};
