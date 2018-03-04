const idNumber = require('./tc-id-number');
const packageInfo = require('../package.json');

exports.help = () => {
  console.log(`
    ${packageInfo.description}

    Kullanım:

    tc-kimlik                         Yeni bir TC Kimlik No üretir
    tc-kimlik -d, --dogrula <numara>  TC Kimlik No geçerliliğini sorgular
    tc-kimlik -h, --help, --yardim    Bu yardım mesajını gösterir
    tc-kimlik -v, --versiyon          Versiyon bilgini gösterir
  `);
  process.exit();
};

exports.validate = () => {
  const processArgs = process.argv.slice(2);

  const result = idNumber.validate(processArgs[1]);

  if (result === false) {
    console.log(`${processArgs[1]} geçerli bir TC kimlik numarası değil.`);
    process.exit();
  }

  console.log(`${processArgs[1]} TC kimlik numarası geçerli.`);
  process.exit();
};

exports.generate = () => {
  console.log(idNumber.generate());
  process.exit();
};
