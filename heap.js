// heap with priority of minimum, keep it at the top of the heap
// visualize it as a tree, only restriction is that the parent node is less than the children
// but it's really an array
// to find a parent's children, n = parent's position, children are 2n and 2n+1
// to find a child's parent, n = child's position, parent is Math.floor(n/2)

var Heap = function(){
	this.array = [];
	// helper function! We do a lot of swapping, so let's keep this handy
	this.swap = function(i, j){
		var temp = this.array[i];
		this.array[i] = this.array[j];
		this.array[j] = temp;
	}
	this.add = function(val){
		// skip the first spot in the array. Math doesn't let us use 0. If there's nothing in the array yet, put the first item at index of 1
		if(this.array.length < 1){
			this.array[1] = val;
		}
		else {
			// if there is already something in the array, push your new item as the last element
			this.array.push(val);
			var position = this.array.length-1;
			// find its current parent's position
			var parentPos = Math.floor(position/2);
		// find out if the child is greater than the parent. If it is, swap your value with the parent. Also, check to make sure you never go past the index of 1.
			while(val < this.array[parentPos] && position > 1){
				this.swap(position, parentPos);
				// reassign your value's position to what used to be it's parent's position
				position = parentPos;
				// find your value's new parent
				parentPos = Math.floor(position/2);
			}
		}
	return this;
	}
	this.remove = function(){
		console.log("Your code should go here!")
		this.swap(1, this.array.length-1);
		this.array.pop();
		console.log("Popped array: " + this.array);
		// parent must be smaller than children
		var parent = 1;
		var child1 = 2;
		var child2 = 3;
		while (this.array[parent] > this.array[child1] || this.array[parent] > this.array[child2]){
			var min = (this.array[child1] < this.array[child2]) ? child1: child2
			this.swap(parent, min);
			parent = min;
			child1 = parent * 2
			child2 = (parent * 2) + 1
		}
		// When somone uses the remove method, the smallest value should be removed and returned and the heap should be reorganized.
		console.log("Sorted array: " + this.array);
	}
}

var newheap = new Heap();
newheap.add(3).add(5).add(8).add(17).add(1).add(24).add(-2).add(2).add(77).add(99).add(-3).add(4);
console.log(newheap.array);
newheap.remove();


// [,-2,2,1,3,5,4,8,17,77,99,24]




