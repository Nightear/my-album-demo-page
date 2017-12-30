import React from 'react'
import { Tab, Grid } from 'semantic-ui-react'
import AudioPlayer from './AudioPlayer';
import Comment from './Comment';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

  const store1 = configureStore();
  const store2 = configureStore();
  const store3 = configureStore();
//import SoundPlayer from './SoundPlayer';
//import LabelImg from './LabelImg';

let song1 = [
    {
        url: 'http://tegos.kz/new/mp3_full/Redfoo_-_New_Thang.mp3',
        cover: 'http://www.nossoarmario.com/blog/wp-content/uploads/2015/01/redfoo.jpg',
        artist: {
            name: 'Redfoo',
            album: 'album',
            song: 'New Thang'
        }
    },
    {
        url: 'http://a.tumblr.com/tumblr_lpoc6cHNDP1r0jthjo1.mp3',
        cover: 'http://www.thailandballoonfestival.com/tibf2013/images/HugoSlider1.jpg',
        artist: {
            name: 'Hugo',
            album: 'album',
            song: '99 Problems'
        }
    },
    {
        url: 'http://claymore.france.free.fr/momo/summer love.mp3',
        cover: 'http://myuvn.com/wp-content/uploads/2015/07/justin-timberlake-pusher-love-girl.jpg',
        artist: {
            name: 'Justin Timberlake',
            song: 'Summer Love'
        }
    },
    {
        url: 'http://a.tumblr.com/tumblr_mlyactVSyX1qejx3lo1.mp3',
        cover: 'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg',
        artist: {
            name: 'Daft Punk',
            album: 'album',
            song: 'Get Lucky'
        }
    },
    {
        url: 'http://a.tumblr.com/tumblr_lxe7hpIUPA1r3ne4ro1.mp3',
        artist: {
            name: 'Michael Buble',
            album: 'album',
            song: 'Feeling Good'
        }
    },
    {
        url: 'http://dl.tak3da.com/download/1394/03/The Weeknd - Can t Feel My Face [320].mp3',
        cover: 'http://www.clickgratis.com.br/fotos-imagens/the-weekend/aHR0cDovL3d3dy5iaWxsYm9hcmQuY29tL2ZpbGVzL3N0eWxlcy9wcm9tb182NTAvcHVibGljL21lZGlhL3RoZS13ZWVrZW5kLXRoZS1oaWxscy12aWRlby1iaWxsYm9hcmQtNjUwLmpwZw==.jpg',
        artist: {
            name: 'The Weekend',
            album: 'album',
            song: 'Can\'t Fell My Face'
        }
    },
    {
        url: 'http://midnightoilco.net/sitebuildercontent/sitebuilderfiles/metallicafuel.mp3',
        cover: 'http://imagens.ailhadometal.com/2015/03/Metallica3.png',
        artist: {
            name: 'Metallica',
            album: 'album',
            song: 'Fuel'
        }
    }
];

let song2 = [
  {
        url: 'http://midnightoilco.net/sitebuildercontent/sitebuilderfiles/metallicafuel.mp3',
        cover: 'http://imagens.ailhadometal.com/2015/03/Metallica3.png',
        artist: {
            name: 'Metallica',
            album: 'album',
            song: 'Fuel'
        }
    }
    ];

    let song3 = [
  {
        url: 'http://dl.tak3da.com/download/1394/03/The Weeknd - Can t Feel My Face [320].mp3',
        cover: 'http://www.clickgratis.com.br/fotos-imagens/the-weekend/aHR0cDovL3d3dy5iaWxsYm9hcmQuY29tL2ZpbGVzL3N0eWxlcy9wcm9tb182NTAvcHVibGljL21lZGlhL3RoZS13ZWVrZW5kLXRoZS1oaWxscy12aWRlby1iaWxsYm9hcmQtNjUwLmpwZw==.jpg',
        artist: {
            name: 'The Weekend',
            album: 'album',
            song: 'Can\'t Fell My Face'
        }
    }
    ];
const panes = [
  {
      menuItem: 'Album 1',
      pane: (
          <Tab.Pane key='tab1'>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <AudioPlayer songs={song1}  />
              </Grid.Column>
              <Grid.Column>
                <Provider store={store1}>
                  <Comment />
                </Provider>

              </Grid.Column>
            </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              
            </Grid.Column>

            <Grid.Column>
              
            </Grid.Column>
          </Grid.Row>
          </Grid>
          </Tab.Pane>
      )
    },
    {
      menuItem: 'Album 2',
      pane: (
          <Tab.Pane key='tab2'>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <AudioPlayer songs={song2}  />
              </Grid.Column>
              <Grid.Column>

                <Provider store={store2}>
                  <Comment />
                </Provider>
                
              </Grid.Column>
            </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              
            </Grid.Column>

            <Grid.Column>
              
            </Grid.Column>
          </Grid.Row>
          </Grid>
          </Tab.Pane>
      )
    },
    {
      menuItem: 'Album 3',
      pane: (
          <Tab.Pane key='tab3'>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <AudioPlayer songs={song3}  />
              </Grid.Column>
              <Grid.Column>

                <Provider store={store3}>
                  <Comment />
                </Provider>
                
              </Grid.Column>
            </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              
            </Grid.Column>

            <Grid.Column>
              
            </Grid.Column>
          </Grid.Row>
          </Grid>
          </Tab.Pane>
      )
    },
  
    
    
]

const TabExampleContentShorthand = () => (
  <Tab panes={panes} renderActiveOnly={false} />
)

export default TabExampleContentShorthand