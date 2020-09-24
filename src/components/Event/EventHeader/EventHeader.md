basic example

```
<div>
	<EventHeader
		title='rev gen sales idea party'
		linkToEvent='/event/rev-gen-sales-idea-party'
		time='2pm'
		location='Rivendale Room'
		usersForEvent={[
			{ first_name: 'Bob', image: 'https://imgbbb.com/images/2020/01/16/16.jpg' },
			{ first_name: 'David', image: 'https://imgbbb.com/images/2020/01/16/22.jpg' },
			{ first_name: 'Yuvraj', image: 'https://imgbbb.com/images/2020/01/16/16.jpg' },
			{ first_name: 'Nick', image: 'https://imgbbb.com/images/2020/01/16/16.jpg' },
		]}
	/>
</div>
```

with 1 User going

```
<div>
  <EventHeader
    title='rev gen sales idea party'
    linkToEvent='/event/rev-gen-sales-idea-party'
    time='2pm'
    location='Rivendale Room'
    usersForEvent={[{ first_name: 'Bob', image: 'https://imgbbb.com/images/2020/01/16/16.jpg' }]}
  />
</div>
```

with 2 Users going

```
<div>
  <EventHeader
    title='rev gen sales idea party'
    linkToEvent='/event/rev-gen-sales-idea-party'
    time='2pm'
    location='Rivendale Room'
    usersForEvent={[
      { first_name: 'Bob', image: 'https://imgbbb.com/images/2020/01/16/16.jpg' },
      { first_name: 'David', image: 'https://imgbbb.com/images/2020/01/16/22.jpg' },
    ]}
  />
</div>
```

with 3 Users going

```
  <EventHeader
    title='rev gen sales idea party'
    linkToEvent='/event/rev-gen-sales-idea-party'
    time='2pm'
    location='Rivendale Room'
    usersForEvent={[
      { first_name: 'Bob', image: 'https://imgbbb.com/images/2020/01/16/16.jpg' },
      { first_name: 'David', image: 'https://imgbbb.com/images/2020/01/16/22.jpg' },
      { first_name: 'William', image: 'https://imgbbb.com/images/2020/01/16/22.jpg' },
    ]}
  />
```

with 4 Users going

```
<EventHeader
    title='rev gen sales idea party'
    linkToEvent='/event/rev-gen-sales-idea-party'
    time='2pm'
    location='Rivendale Room'
    usersForEvent={[
      { first_name: 'Bob', image: 'https://imgbbb.com/images/2020/01/16/16.jpg' },
      { first_name: 'David', image: 'https://imgbbb.com/images/2020/01/16/22.jpg' },
      { first_name: 'William', image: 'https://imgbbb.com/images/2020/01/16/22.jpg' },
      { first_name: 'Wade', image: 'https://imgbbb.com/images/2020/01/16/22.jpg' },
    ]}
  />
```
