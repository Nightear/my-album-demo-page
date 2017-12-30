import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const LabelExampleRibbonImage = () => (
  <Grid columns={2}>
    <Grid.Column>
      <Image
        fluid
        label={{ as: 'a', color: 'black', content: 'Sun', icon: 'sun', ribbon: 'left' }}
        src='http://www.nossoarmario.com/blog/wp-content/uploads/2015/01/redfoo.jpg'
      />
    </Grid.Column>

    <Grid.Column>
      <Image
        fluid
        label={{ as: 'a', color: 'blue', content: 'Moon', icon: 'moon', ribbon: 'right' }}
        src='http://imagens.ailhadometal.com/2015/03/Metallica3.png'
      />
    </Grid.Column>
  </Grid>
)

export default LabelExampleRibbonImage