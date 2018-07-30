function hash(plaintext, upper_case = false) {
  if (plaintext === "") {
    return "";
  }

  let out = hex_sha256(plaintext.replace(new RegExp("\r", "g"), ""));
  return upper_case ? out.toUpperCase() : out
}

function hash_each_line(plaintext, upper_case = false) {
  return plaintext.split(/\r?\n/).map(function(line) { 
    return hash(line, upper_case); 
  }).join("\n");
}

function generate_hash(plaintext, each_line = false, upper_case = false) {
  return each_line ? hash_each_line(plaintext, upper_case) : hash(plaintext, upper_case);
}