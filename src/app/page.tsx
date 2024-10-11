"use client"
/** React Imports */
import React, { useState } from 'react';
/** Third Oarty Imports */
import CryptoJS from 'crypto-js';

export default function Home() {
  /** Hooks */
  const [valueText, setValueText] = useState({ encrytp: '', decrypt: '' })
  const [decryptText, setDecryptText] = useState<string>('')
  const [encryptText, setEncryptText] = useState<string>('')

  /** Vars */
  const SECRET_KEY = 'tytyd'

  /** Functions */
  const encrypt = (text: string) => {
    const crypted = CryptoJS.AES.encrypt(text, SECRET_KEY).toString()
    setEncryptText(crypted)
  }

  const decrypt = (text: string) => {
    const bytes = CryptoJS.AES.decrypt(text, SECRET_KEY)
    const originalText = bytes.toString(CryptoJS.enc.Utf8)
    setDecryptText(originalText)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <input
          type="text"
          name="encrypt"
          id='encrypt'
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Encrypt"
          onChange={(e) => setValueText(prev => ({ ...prev, encrytp: e.target.value }))}
        />

        <button
          type="button"
          onClick={() => encrypt(valueText.encrytp)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Encrypt
        </button>
        <p>Encrypted: {encryptText}</p>
        <input
          type="text"
          name="decrypt"
          placeholder="Decrypt"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setValueText(prev => ({ ...prev, decrypt: e.target.value }))}
        />

        <button
          type="button"
          onClick={() => decrypt(valueText.decrypt)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Decrypt
        </button>
        <p>Decrypted: {decryptText}</p>
      </main>
    </div>
  );
}
