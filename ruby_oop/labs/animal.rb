class Animal
  attr_accessor :name, :color
  def initialize(name, color)
    @name = name
    @color = color
  end

  def eat
    "I'm eating"
  end

  def walk
    "I'm walking"
  end
end

