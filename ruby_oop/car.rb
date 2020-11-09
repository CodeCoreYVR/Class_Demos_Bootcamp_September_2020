class Car
  attr_reader :model, :type, :capacity
  attr_writer :model, :type, :capacity
  def initialize(model, type, capacity)
    @model = model
    @type = type
    @capacity = capacity
  end

  def self.max_speed
    puts 200
  end

  def drive
    ignite_engine
    puts "driving"
  end

  def stop
    puts "stopping"
  end

  def park
    puts "parking"
  end

  private

  def ignite_engine
    puts "starting engine"
  end

  def pump_gas
    puts "pumping gas"
  end

end

car = Car.new('Model S', 'Sedan', 4)
p car
p car.model
p car.type
p car.capacity
car.model = "Modex X"
car.type = "SUV"
car.capacity = 5
p car