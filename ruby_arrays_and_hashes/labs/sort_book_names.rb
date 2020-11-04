books = []
puts "Enter a book name"
while book = gets.chomp
  break if book == "exit"
  books << book.capitalize
end
p books.sort.join " "