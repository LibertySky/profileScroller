const data = [
	{
		name: 'John Doe',
		age: 32,
		gender: 'male',
		lookingfor: 'female',
		location: 'Boston MA',
		image: 'https://randomuser.me/api/portraits/men/75.jpg'
	},
	{
		name: 'Jen Smith',
		age: 28,
		gender: 'female',
		lookingfor: 'male',
		location: 'New York NY',
		image: 'https://randomuser.me/api/portraits/women/75.jpg'
	},
	{
		name: 'William Jonson',
		age: 34,
		gender: 'male',
		lookingfor: 'male',
		location: 'Washington DC',
		image: 'https://randomuser.me/api/portraits/men/25.jpg'
	},
	{
		name: 'Anna Black',
		age: 21,
		gender: 'female',
		lookingfor: 'female',
		location: 'Miami FL',
		image: 'https://randomuser.me/api/portraits/women/85.jpg'
	}
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();
// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Show next profile
function nextProfile() {
	const currentProfile = profiles.next().value;
	if (currentProfile !== undefined) {
		document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Located in: ${currentProfile.location}</li>
                <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
        `;

		document.getElementById(
			'imageDisplay'
		).innerHTML = `<img src="${currentProfile.image}">`;
	} else {
		// No more profile > reload
		window.location.reload();
	}
}

// Profile Iterator
function profileIterator(profiles) {
	let nextIndex = 0;

	return {
		next: function() {
			return nextIndex < profiles.length
				? { value: profiles[nextIndex++], done: false }
				: { done: true };
		}
	};
}
