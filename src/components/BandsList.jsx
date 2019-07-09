import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import nirvana from './../assets/nirvana.jpg';
import rhcp from './../assets/rhcp.jpg';
import soad from './../assets/soad.jpeg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#282c34',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '65%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const tileData = [
  {
    img: nirvana,
    title: 'Nirvana',
  },
  {
    img: rhcp,
    title: 'Red Hot Chili Peppers',
  },
  {
    img: soad,
    title: 'System of A Down',
  },
  {
    img: nirvana,
    title: 'Nirvana',
  },
  {
    img: rhcp,
    title: 'Red Hot Chili Peppers',
  },
  {
    img: soad,
    title: 'System of A Down',
  },
  {
    img: nirvana,
    title: 'Nirvana',
  },
  {
    img: rhcp,
    title: 'Red Hot Chili Peppers',
  },
  {
    img: soad,
    title: 'System of A Down',
  }
]


export default function BandsList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={500} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: '10%' }}>
          <h1 style={{color:'white', fontSize: '4em'}}>Bands</h1>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}