nums = [1,2,3,4,5]

def check(nums):
    higher =  True 

    if nums[0] > nums[1]:
        higher = False


    for i in range(len(nums)-1):
        if nums[i] ==nums [i+1]:
            return "NO" 
        if higher == False and nums[i] < nums[i+1]: 
            return "NO"

        