# to define method we use special key word def / end

# 👇🏻Basic structure of methods in Ruby
# it starts with keyword "def"
# def method_name(arg1, arg2)

# it implicit returns the value.
#The value od last expression is the return value of the method
# end
# 👆🏻it ends with the keyword "end" 



def multiply(a,b) 
    a*b
end

# Calling a method

#  Important Note: The arguments should be in sequence in which it is defined while calling . so the value of arg1 should match with its defination arg1
# method_name(arg1, arg2)


# There are two methods for calling a ruby function:
# 1. With brackets 
# 2. Without brackets

# Example:
# 👇🏻 puts is used as console.log in ruby
# puts multiply(4,5); #=> 20
# 👆🏻First method with brackets 


 #👇🏻and second method without brackets
#  puts multiply 4,5 #=> 20

#  Conventions for writing methods
# 1. Method name should begin with lowercaser. If you begin with capital letter Ruby might think it is a constant and can parse it in correctly
# 2. Method that returns boolean ends with "?". This just convention.

#  example of method_name with ?
def by_five?(x)
    puts 'Hi Bootcampers'
   
    'How are you doing today'

    x%5==0 # This will return either true or false
end

# puts by_five?(5) #=> true
# puts by_five?(9) #=> false
# check=by_five?10 #=> true

# puts " Value of Check: #{check}"
# Class_demo

# typeof in javascript 
def what_is_it(thing)
    # puts "The result of things.class : #{thing.class}"
    # puts "The result of things.class.to_s : #{thing.class.to_s}"
    if [String, Array, Integer].include? (thing.class)   #=> this array.include? will return true or false
        thing.class.to_s
    else
        "Something Else"
    end

end

# puts what_is_it(1) #=> Integer
# puts what_is_it(11.2) #=> Something Else
# puts what_is_it([1,2,3,4]) #=>Array
# puts what_is_it "hello" #=> String

# Returning Early
# We have a keyword 'return' which we can use to return early or to return value in the middle of method

def my_method(a,b)
    return a*b
    # If we use return keyword in middle of method it will ignore the following lines, just like javascript
    a+b
end

# puts my_method 5,12

# Arguments 
# Optional / Default Arguments

def addition(a=0,b=0) # We can set value of arguments as a default value, so incase user doesnot pass argument ruby should not complain
    b+a
end
# puts addition 5,7
# puts addition 5

# Varidic Methods

# Defination: The method that can take any number of arguments are called Variadic Methods

def sample(*nums) 
    puts "number of arguments passed: #{nums.length}"
    for i in 0...nums.length
        puts "The Parameter/ Arguments are #{nums[i]}"
    end
end

# sample "Zara", 6 ,"F"


def sample_1(name, age ,*nums)
    puts "number of arguments passed: #{nums.length}"
    puts "name:#{name}"
    puts "age: #{age}"
    puts "age: #{nums}"
    for i in 0...nums.length
        puts " The Parameter / Arguments are #{nums[i]}"
    end

end

# sample_1  "raza","F", "Student"

# Blocks

# Blocks are little anonymous functiosn that can be passed to methods

# they are enclosed in do / end or between brackets {}

# We can pass arguments to the block and that is done in between "||" pipes characters.

# Example:

# With do / end block 
# [1,2,3].each do |num|
# puts num
# puts num*10
# end

# # With '{}' block
# [1,2,3].each { |num|
# puts num
# puts num * 10
# }

# Ruby 'Yield' keyword:
# Example:

def print_once
    yield # This piece of a code from BLOCK is replaced by YIELD. 👉🏻 puts "Block is being run"
end

# print_once{puts "Block is being run"}

def print_twice
    yield
    yield
end
# print_twice{puts "Block is being run twice here"}

def my_method
    x=15
    yield(x)
    puts "Bye"
end

# With do/ end block 
# my_method do |my_arg|
#     puts "I received #{my_arg} from method"
# end

# With {}
# my_method {|my_arg| 
#     puts "I received #{my_arg} from method"
# }

# Exercise from Presentation

def product(*nums)
    nums.reduce(1) do |total,num|
        total * num
    end
end

# puts product 1,2,3

# Our own each method

def each(arr)
    for val in arr
        return "no block given" unless block_given? #block_given is a reserved word to check the block provided by user or not
        result = yield(val)
        puts result
    end

end

# each([1,2,3,4]){|x| x*5 }

# Exercise 2
def filter(arr)
    new_array=[];
    for val in arr
        return "no block passed" unless block_given?
        result = yield(val)
        if result
            new_array<<val
        end
    end
    puts "Output: #{new_array}" 
    new_array
end

# puts filter [1,2,3,4] # this is without block

# filter([1,2,3,4]){|x| 
#     x%2 == 0 #OR x.even?   
# }

# Lambdas

say_something=lambda{ puts "this is a lambda"}

# OR 

say_something_1=->{puts "This again a lambda"}

# say_something.call
# say_something_1.call

# Passing Argumetns to Lambda

# times_two=->(x){x*2}
# puts times_two.call(10)

# OR

times_two=lambda{|x| x*2}
# puts times_two.call(10)


# Using Lambda as a Block

def my_method_1(code)
    puts "---#{code.class}----"
    puts "Hey You!"
    puts code.call(2)
    puts "hello"
end

# my_method_1(times_two)

# Difference between PROC and Lambdas
# Proc:
# A very simillar concept as lambdas
# No dedicated class for a lambda. A lambda is just kind of proc

t = Proc.new {|x,y| puts "I don't care about the arguments."}
# t.call #(2,3) 

# 1. On of the difference is how you create them - lambdas are defined with ->{} / lambda{} and procs are defined with Proc.new{}
# 2. A proc behaves differently than lambda , specially when it comes to arguments. Proc doesn't care about the arguments
# 3. Procs return from the current method, while lambdas return from the lambda itself

my_proc=Proc.new {|x|
puts "I am from proc-#{x}"
return
}
# my_method_1(my_proc)

# Use Lambda or Proc as a block with &

# Key Arguments / Named Arguments

# def my_cordinates(x,y){

#         # perform something on x cordinates
#         # Perform something on y cordinates
# }
# my_cordinates(3,5)

def write(file:,data:,mode:"ascii")
    puts "File:#{file}- Data:#{data}- Mode:#{mode}"
end
write(data:123, file:"text.txt")

def my_method_2(a,b,hash)
puts "A is #{a}"
puts "b is #{b}"
puts "hash is #{hash}"
end

# my_method_2(4,5,{a:1,b:2})
# my_method_2 4,5,{a:1,b:2}
# my_method_2 4,5,a:1,b:2

# Meta Programming
# *****************

# def one
# 1
# end

# def two
#     2
# end

# def three
#     3
# end

# puts one
# puts two
# puts three

# define_method

numbers={
    1=>"one",
    2=>"two",
    3=>"three",
    4=>"four"
}

numbers.each do |number, number_name|
    # when using define_method, the first argument is the name of the method
    # being define. The body of the method is the block that is passed to define_method
    define_method(number_name) do
        number
    end
end

# num_return=one() #=>1
# puts two() #=>2
# puts three()#=>3
# puts four()#=>4

# puts "Check Value: #{num_return.class}"


define_method('hello_world') do
    puts "Hello World"
end

# hello_world()

# define_method above👆🏻 will generate following👇🏻 code
# def hello_world
#     puts "Hello World"
# end

# eval
# The  eval method takes a string as an argument and will attempt to evaluate as ruby code.

puts eval("1+2+3")#=>7

puts eval("two+three+four")#=>9

# Exercise
my_array=["hello", "hi","hola"]
my_array.each do |greeting|
    define_method(greeting) do |name| 
        "#{greeting} #{name}"
    end
end
code = "
puts hi('Hano')
puts hola('Hano')
"

eval(code)

