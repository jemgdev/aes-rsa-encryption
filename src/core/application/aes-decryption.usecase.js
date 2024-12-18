class AESDecryptionUseCase {
  constructor ({
    aesEncryptionRepository,
    keyManagementRepository
  }) {
    this.aesEncryptionRepository = aesEncryptionRepository
    this.keyManagementRepository = keyManagementRepository
  }

  excecute (payload) {
    try {
      const decryptedData = this.aesEncryptionRepository.decryptWithAES({
        payload,
        keyBase64: this.keyManagementRepository.getSymmetrickKey()
      })
  
      return decryptedData
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = {
  AESDecryptionUseCase
}