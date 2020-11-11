def reduce(arr, init)
 accumulator = init 

 for value in arr
   accumulator = yield(accumulator, value)
 end

 accumulator
end
