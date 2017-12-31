function doneOrNot(board){

	var row = board.filter( function(rowArr) {
		return isDuplicatedInRow(rowArr)
	})

	var transposedBoard = transpose(board)

	var col = transposedBoard.filter( function(rowArr) {
		return isDuplicatedInRow(rowArr)
	})

	var first = sliceArr(board, 0, 3)
	var second = sliceArr(board, 3, 6)
	var third = sliceArr(board, 6, 9)

	var arr = concatArr(first).concat(concatArr(second)).concat(concatArr(third))
	
	var sqr = arr.filter( function(rowArr) {
		return isDuplicatedInRow(rowArr)
	})

	if (row.length !== 0 || col.length !== 0 || sqr.length !== 0) return 'Try again!'

	return 'Finished!'
}


	function isDuplicatedInRow(arr) {
		var duplicate = arr.filter( function(elm, index, self) {
			return self.indexOf(elm) !== index
		})
		return duplicate.length !== 0
	}
	function transpose(arr) {
		var reverse = new Array(9)
		for (var i = 0; i < arr.length; i++) {
			reverse[i] = new Array(9)
			for (var j = 0; j < arr.length; j++) {
				reverse[i][j] = arr[j][i]
			}
		}
		return reverse
	}

	function sliceArr(board, b, e) {
		return board.map( function(arr) {
			return arr.slice(b, e)
		})
	}
	function concatArr(arr) {
		result = []
		for (var i = 0; i < 3; i++) {
			slice = arr.slice(3 * i, 3 * i + 3).reduce(function(p, c){
				return p.concat(c)
			})
			result.push(slice)
		}
		return result
	}



var r = doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
		     [6, 7, 2, 1, 9, 5, 3, 4, 8],
		     [1, 9, 8, 3, 4, 2, 5, 6, 7],
		     [8, 5, 9, 7, 6, 1, 4, 2, 3],
		     [4, 2, 6, 8, 5, 3, 7, 9, 1],
		     [7, 1, 3, 9, 2, 4, 8, 5, 6],
		     [9, 6, 1, 5, 3, 7, 2, 8, 4],
		     [2, 8, 7, 4, 1, 9, 6, 3, 5],
		     [3, 4, 5, 2, 8, 6, 1, 7, 9]])

console.log(r)