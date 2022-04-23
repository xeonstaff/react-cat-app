import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CatPic from './CatPic'
import CatName from './CatName'

import '../index.css'

export default function CatCard() {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className='picbox'>
                    <CatPic />
                </div>
                <div>
                    <CatName />
                </div>
            </CardContent>
        </Card>
    );
}

