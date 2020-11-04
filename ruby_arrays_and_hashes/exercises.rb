# taking names
if false

  names = []

  while name = gets.chomp
    break if name == "exit"
    names << name
  end

  names.each do |x|
    p x.capitalize
  end

end

# Up & Down

sentence = gets.chomp

new_sentence = sentence.split(" ").map.with_index do |word, index|
  if index % 2 == 0
    word.upcase!
  else
    word.downcase!
  end
  word
end

p new_sentence.join(" ")

