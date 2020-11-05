def map_over_hashes(hash)
  new_arr = []

  for key, value in hash
    new_arr << yield(key, value)
  end

  p new_arr
end

map_over_hashes({ name: "Cersei", profession: "Queen", mood: "bitter" }) do |key, value|
  "Her #{key.to_s} is #{value}"
end

map_over_hashes({ 2 => 5, 10 => 2, 5 => 6 }) { |key, value| key.to_s * value }
