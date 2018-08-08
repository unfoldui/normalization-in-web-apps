



				// Single state tree

				const state = {
					inbox     : [{email1, email2, email3}],
					someFilter: [{email1, email4, email5}],
					important : [{email2, email3, email6}]
				}







				// Normalized state tree

				const normalizedState = {
					mails     : {
						1: email1,
						2: email2,
						3: email3,
						4: email4,
						5: email5,
						6: email6,
					},
					inbox     : [1, 2, 3],
					someFilter: [1, 4, 5],
					important : [2, 3, 6]
				}
