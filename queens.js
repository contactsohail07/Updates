var size=8
function check_placement(partial,col){
	var row=partial.length
	if (partial){
		var spread=1
		var i
		for (i=row-1;i>-1;i--){
			var arr=[col,col-spread,col+spread]
			if (Number(partial[i]) in arr){
				return false
			}
			spread += 1
		}
	}
	else{
		return true
	}
}
var check
check=check_placement("45",3)
//console.log(check)

function print_board(partial){
	for (digit in partial){
		var col = Number(partial[digit])
		var i
		var ar=[]
		for (i=1;i<=col-1;i++){
			ar.push(".")
		}
		var x=""
		if (ar.length>=1){
		x=ar.join("")}
		var y="Q"
		var br=[]
		for (i=1;i<=size-col;i++){
			br.push(".")
		}
		var z=""
		if (br.length>=1){
		z=br.join("")}
		var ans=x.concat(y,z)
		console.log(ans)
	}
}
board=print_board("123")
console.log(board)

function find_solutions(){
	var partials=[""]
	while (partials.length>=1){
		var partial = partials.shift()
		if (partials.length>=size){
			console.log(partial)
		}
		else{
			var col
			for (col=1;col<=size;col++){
				if (check_placement(partial,col)==true){
					var str_col=col.toString()
					var part=partial.concat(str_col)
					partials.push(part)
				}
			}
		}
	}
}

solutions=find_solutions()
//console.log(solutions)
