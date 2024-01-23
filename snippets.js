// This function generates a random key.
function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

// Simple for loop to log items from a item.
function logItems(items) {
  for (const item of items) {
    console.log(item.name)
  }
}

// MAILTO:
mailto:j.doe@example.com?cc=m.bowen@example.com&subject=Quick%20question&body=Hi%20team%21%0aHow%20are%20you%20doing%3F
