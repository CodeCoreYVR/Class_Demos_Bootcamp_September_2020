require_relative './food.rb'

class Beer < Food

  def initialize(sugar, protein, fat, volume)
    super(sugar, protein, fat)
    @volume = volume
  end

end

b = Beer.new(10, 5, 5, 50)
p b
f = Food.new(5,5,50)
p f