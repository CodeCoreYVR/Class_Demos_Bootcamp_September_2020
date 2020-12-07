# Ruby classes blueprints to building objects
class Cookie
  $hello = 'Hello' # global variables can be accessed anywhere
  attr_reader :flour # attr_reader is a method that will create a getter method for a instance variable. It accepts an argument symbol which should be the name of the instance variable you want to create a getter method for.
  attr_writer :flour # creates a setter method
  def initialize(sugar, flour)
    # initialize is a special method that gets invoked automatically when a new instance of the class is initialized
    # it is like the `constructor` function of a javascript class
    @flour = flour #instance variables are only accessable through an instance's methods
    @sugar = sugar

    @@color = 'brown' # class variables are accessable through any instance of the class and class methods
    puts "in the intialize method"
  end

  # self is a keyword in ruby that is similar to javascript's `this` keyword.
  # it represents the object that owns it
  # Class methods are methods that belong to the CLASS not an instance of the Class
  def self.info # self here refers the class Cookie
    "I'm the Cookie class!"
  end

  def sugar # this is a getter method to return the instance varaible @sugar so that we can call c.sugar to get the value of @sugar
    @sugar
  end

  def sugar=(new_sugar) # this is a setter method used to change the value of a instance variable
    @sugar = new_sugar
  end

  def print_self
    # @color = 'brown'
    # inside of an instance method `self` refers to the instance itself
    p self
  end

  def details
    puts "sugar: #{@sugar} | flour: #{@flour} | #{@@color}"
  end

  def bake_n_eat # we define instance methods using a method declaration inside of the Class
    p bake # you can only call private methods from inside of methods of the class. You can not call private methods on instances of the Class
    "eat the cookie"
  end

  def eat
    "Nom. Nom. Nom!"
  end
  
  private # all methods defined below the private keyword are "private methods"
  # private methods can only be called within methods of the class
  # private methods are used to organize internal code

  def bake
    "baking the cookie"
  end

end

# c = Cookie.new # to create a new instance of a class we use the .new() method on the Class itself

# p c
# p "the class of our instance is #{c.class}"

# c.bake_n_eat # calls the bake method
# c.eat

# puts c.bake_n_eat
# # puts c.bake # you can not call a private method from the instance

# puts Cookie.info
# # c.info # gives an error because Class methods belong to the Class itself not an instance of the Class

# c.print_self

k = Cookie.new(5, 15)
k.details
c = Cookie.new(25, 50)
c.details

p $hello

# 
p c.sugar
c.sugar = 100 # because we have a setter method called sugar= we can use the assignment operator to change the value of the instance variable
p c.sugar

p "The flour amount is #{c.flour}"
c.flour = 10000
p "The flour amount is now #{c.flour}"


class Oreo < Cookie # use the less than operator to inherit features of another class
  attr_accessor :filling_type

  def eat
    p super # calling super within an instance method will invoke the method that belongs to the parent class
    "split it into two and then lick the center"
  end

end

o = Oreo.new(500, 50)
puts "calling .eat on oreo: #{o.eat}"
o.filling_type = "vanilla"
p o

