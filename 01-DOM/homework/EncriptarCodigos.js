// Encryption function
function encrypt(name, phoneNumber) {
    let encryptedName = '';
    let encryptedPhoneNumber = '';
     // Encrypt name
    for (let i = 0; i < name.length; i++) {
      encryptedName += String.fromCharCode(name.charCodeAt(i) + 1);
    }
     // Encrypt phone number
    for (let i = 0; i < phoneNumber.length; i++) {
      encryptedPhoneNumber += String.fromCharCode(phoneNumber.charCodeAt(i) + 1);
    }
     return {
      encryptedName,
      encryptedPhoneNumber
    };
  }
   // Decryption function
  function decrypt(encryptedName, encryptedPhoneNumber) {
    let decryptedName = '';
    let decryptedPhoneNumber = '';
     // Decrypt name
    for (let i = 0; i < encryptedName.length; i++) {
      decryptedName += String.fromCharCode(encryptedName.charCodeAt(i) - 1);
    }
     // Decrypt phone number
    for (let i = 0; i < encryptedPhoneNumber.length; i++) {
      decryptedPhoneNumber += String.fromCharCode(encryptedPhoneNumber.charCodeAt(i) - 1);
    }
     return {
      decryptedName,
      decryptedPhoneNumber
    };
  }
   // Example usage
  const name = 'Joel Lopez ';
  const phoneNumber = '04242779849';
   const encryptedData = encrypt(name, phoneNumber);
  console.log('Encrypted Name:', encryptedData.encryptedName);
  console.log('Encrypted Phone Number:', encryptedData.encryptedPhoneNumber);
   const decryptedData = decrypt(encryptedData.encryptedName, encryptedData.encryptedPhoneNumber);
  console.log('Decrypted Name:', decryptedData.decryptedName);
  console.log('Decrypted Phone Number:', decryptedData.decryptedPhoneNumber);