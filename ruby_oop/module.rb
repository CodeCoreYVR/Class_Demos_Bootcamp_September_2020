# modules are a way of organizing code in ruby
# 1) used as a namespace
# 2) mixin

module Computer
  class Apple
  end
end

module Fruit
  class Apple
  end
end

macbook = Computer::Apple.new
p macbook.class
apple_fruit = Fruit::Apple.new
p apple_fruit.class

# modules as a mixin

module HelperMethods
  def name_display
    name.squeeze(" ").capitalize
  end

  def hello_world
    "hello world"
  end
end

class User
  attr_accessor :name
  include HelperMethods # will load all the methods of a module and allow INSTANCES to use them as if they were instance methods
  # def name_display
  #   name.squeeze(" ").capitalize
  # end

  # def hello_world
  #   "hello world"
  # end
end

class Car
  attr_accessor :name
  extend HelperMethods # add all methods of the module as CLASS methods
end

p Car.hello_world
car = Car.new