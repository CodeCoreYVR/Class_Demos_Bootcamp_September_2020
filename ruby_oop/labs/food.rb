class Food
  def initialize(sugar = 0, protein = 0, fat = 0)
    @sugar = sugar
    @protein = protein
    @fat = fat
  end
end

f = Food.new(10,10,10)
