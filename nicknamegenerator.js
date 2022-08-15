function nicknameGenerator(name){
    return name.length <= 3 ? "Error: Name too short" 
      : /^[aeiou]/.test(name[2]) ? name.substring(0, 4) : name.substring(0, 3)
  }