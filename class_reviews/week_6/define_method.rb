for n in 1..10
  define_method("method#{n}") do |arg|
    puts "#{n} is not scoped to the loop"
    puts arg
  end
end

puts "#{n} is available outside the loop"
puts method1 "argument passed to method1"
puts method7 "Hello world"