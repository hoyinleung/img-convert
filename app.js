const webp=require('webp-converter');
const fs = require('fs');
const path = require('path');

// this will grant 755 permission to webp executables
webp.grant_permission();

const targetDirectory = __dirname+'/img/original/'
const outputDirectory = __dirname+'/img/output/'

fs.readdir(targetDirectory, (err, files) => {
  files.forEach(file => {
    console.log(file);

    const targetFileFullPath = targetDirectory+file;
    console.log(targetFileFullPath);

    const name1 = path.basename(targetFileFullPath);
    const ext1 = path.extname(targetFileFullPath);
    const nameWithoutExt = path.basename(name1, ext1);

    const result = webp.cwebp(targetFileFullPath,outputDirectory+nameWithoutExt+".webp","-q 80",logging="-v");
    result.then((response) => {
        console.log(response);
    });
  });
});



