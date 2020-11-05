
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

def map(arr)
output=[]
for val in arr
    output<<yield(val)
end
puts "Output: #{output}"
output
end

power_2=->(n){n**2}

map([1,2,3,4,5],&power_2)