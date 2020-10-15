import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers :{
        Authorization:'Bearer 8BY9l_bDrBPXkpPuYjOVnQocsc_tjDL1uMZxqbyBwH-WCBMJP7zyCphqZ1GqVlUKl9QB4l2xVXjquoXnAkUPVUEZso2v5zmFO2sH4S5PYWvjEEFtdUNLOm16WlkXXYx'
    }
})