import crypto from "crypto"

const salt = "eoqkrskwk111!"
const iv = Buffer.from("pupscalepartners")
const key = Buffer.from("atpupscale-partners-eoqkrskwk111")

export const generateHashedPassword = (value) => crypto.pbkdf2Sync(value, salt, 10, 64, "sha512").toString("hex")

export const generateEncryptedPassword = (value) => {
  if (!value && value !== 0) return value

  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv)

  let crypted = cipher.update(value, "utf8", "hex")
  crypted += cipher.final("hex")
  crypted = Buffer.from(crypted, "hex")

  // stitch iv string
  let enc = Buffer.concat([iv, Buffer.from(crypted, "base64")])
  enc = enc.toString("base64")

  return enc
}

export const decryptFromEncryptedElement = (value) => {}
