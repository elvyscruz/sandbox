// Enums

// The primary goal of Enum is to signal to other engineers that these are closely related values
// Use whenever we have a small fixed set of values that are closely related
// Cannot add more values while code is running

enum CarTrims {
	Luxury = 'LX',
	Base = 'EX',
	Mid = 'EX-L'

}

console.log(CarTrims.Base)
