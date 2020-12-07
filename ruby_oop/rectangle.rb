class Rectangle
  # attr_reader :width, :height
  # attr_writer :width, :height

  attr_accessor :widht, :height # defines both getters and setters
  def initialize(a, b)
    @width = a
    @height = b
  end

  def area
    @width * @height
  end

  def is_square?
    @width == @height
  end
end

x = Rectangle.new(5, 5)
y = Rectangle.new(5, 10)
p x.area
p y.area
p x.is_square?
p y.is_square?