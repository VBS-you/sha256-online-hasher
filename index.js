function get_id_val(id) {
  return document.getElementById(id).value;
}

function set_id(id, res) {
  document.getElementById(id).innerHTML = res;
}

function clear_id(id) {
  document.getElementById(id).innerHTML = "";
}

function clear_id_val(id) {
  document.getElementById(id).value = "";
}

function focus_id(id) {
  document.getElementById(id).focus();
}

function replace_all(find, replace, str) {
  return str.replace(new RegExp(find, "g"), replace);
}

function hash_each_line(input) {
  let input_lines = [];
  if (input.search("\r\n") > 0) {
    input_lines = input.split("\r\n");
  } else if (input.search("\r") > 0) {
    input_lines = input.split("\r");
  } else if (input.search("\n") > 0) {
    input_lines = input.split("\n");
  } else {
    input_lines[0] = input;
  }

  let input_hash_all = "";
  let input_hash_tmp = "";
  for (let i in input_lines) {
    if (input_lines[i].length != 0) {
      input_hash_tmp = hex_sha256(input_lines[i]);
      input_hash_tmp = input_hash_tmp.toUpperCase();
    } else {
      input_hash_tmp = "";
    }
    input_hash_all += input_hash_tmp + "\n";
  }
  return input_hash_all;
}

function generate_hash(input, lines_id) {
  if (input.length == 0) {
    clear_id(result_id);
    return;
  }

  if (document.getElementById(lines_id).checked) {
    return hash_each_line(input);
  } else {
    if (input.search("\r") > 0) {
      input = replace_all("\r", "", input);
    }
    let input_hash = hex_sha256(input);
    input_hash = input_hash.toUpperCase();

    return input_hash;
  }
}