function hash(plaintext, upperCase = false) {
  if (plaintext === '') {
    return '';
  }

  let out = b64_sha256(plaintext.replace(new RegExp('\r', 'g'), ''));
  return upperCase ? out.toUpperCase() : out
}

function hashEachLine(plaintext, upperCase = false) {
  return plaintext.split(/\r?\n/).map(function(line) { 
    return hash(line, upperCase); 
  }).join('\n');
}

function generate_hash(plaintext, eachLine = false, upperCase = false) {
  return eachLine ? hashEachLine(plaintext, upperCase) : hash(plaintext, upperCase);
}
