With only `required` props

```
<IdeaRowCard
  id={234}
  description='Reduce costs by reducing dedicated fleet by getting deal with bulk pricing rideshare agreement'
  onButtonClick={() => alert('Recommended')}
  labels={[
    { title: 'sales', subtitle: 'cost savings' },
    { title: 'fleet', subtitle: 'automation' },
    { title: 'status', subtitle: '$10 million', barColor: '#58d68d' },
    { title: 'risk', subtitle: 'medium', barColor: '#eb4667' },
  ]}
/>
```

With additional `checkbox` props

```
<IdeaRowCard
  id={234}
  description="Reduce costs by reducing dedicated fleet by getting deal with bulk pricing rideshare agreement"
  onButtonClick={() => alert('Recommended')}
  labels={[
    { title: 'sales', subtitle: 'cost savings' },
    { title: 'fleet', subtitle: 'automation' },
    { title: 'status', subtitle: '$5 million', barColor: '#58d68d' },
    { title: 'risk', subtitle: 'low', barColor: '#eb4667' },
  ]}
  isChecked={true}
  onCheck={() => alert("triggered check!")}
  onUncheck={() => alert("triggered un-check!")}
/>
```

With additional `Star` props

```
<IdeaRowCard
  id={234}
  description="Reduce costs by reducing dedicated fleet by getting deal with bulk pricing rideshare agreement"
  onButtonClick={() => alert('Recommended')}
  labels={[
    { title: 'sales', subtitle: 'cost savings' },
    { title: 'fleet', subtitle: 'automation' },
    { title: 'status', subtitle: '$5 million', barColor: '#58d68d' },
    { title: 'risk', subtitle: 'low', barColor: '#eb4667' },
  ]}
  isLiked={true}
  onLike={() => alert("triggered like!")}
  onDislike={() => alert("triggered dis-like!")}
/>
```
