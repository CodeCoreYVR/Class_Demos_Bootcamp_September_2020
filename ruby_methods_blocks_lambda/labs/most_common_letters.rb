def most_common_letter(string)
  obj = Hash.new
  string.each_char do |letter|
    if obj[letter] == nil
      obj[letter] = 1 #=> a:1
    else
      obj[letter] += 1 #=>a:3
    end
  end
  puts obj #=> It will display the object

  max = string[0] # Assuming that string[0] is max

  obj.each_key do |key|
    if obj[key] > obj[max]
      max = key
    end
  end
  max
end

puts most_common_letter("aaa aasdfnvn!!!!!!!!!!!!!!zzzzzzjdf")
