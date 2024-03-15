
import React, { useState } from "react";
import Arrow from "../../../assets/images/rightarrow2.svg";

export const productCard = [
    {
        value: '13.7 K',
        title: 'Total Sales',
        percent: '4% Increase'
    },
    {
        value: '$55 M',
        title: 'Overall Revenue',
        percent: '2.5% Increase'
    },
    {
        value: '$1,075',
        title: 'Avg. Sale Value',
        percent: '4% Increase'
    },
    {
        value: '142',
        title: 'Up-sells',
        percent: '1.56% Increase'
    },
   
]

export const producttablehead = ['Product Information', 'Sales', 'Revenue', 'Acquisition Rate', 'Churn Rate', 'VIEW'];

export const producttablebody :any= [
    {
        product: 'Regular Savings Account',
        sale: '805',
        revenue: '$20.80',
        acqrate: '1.25%',
        churnRate: '0.54%',
        icon: <img src={Arrow} alt="Arrow" /> 
    },
    {
        product: 'Home Loan',
        sale: '153',
        revenue: '$202.20',
        acqrate: '2.25%',
        churnRate: '0.74%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Regular Savings Account',
        sale: '805',
        revenue: '$20.80',
        acqrate: '1.25%',
        churnRate: '0.54%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Home Loan',
        sale: '153',
        revenue: '$202.20',
        acqrate: '2.25%',
        churnRate: '0.74%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Regular Savings Account',
        sale: '805',
        revenue: '$20.80',
        acqrate: '1.25%',
        churnRate: '0.54%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Home Loan',
        sale: '153',
        revenue: '$202.20',
        acqrate: '2.25%',
        churnRate: '0.74%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Regular Savings Account',
        sale: '805',
        revenue: '$20.80',
        acqrate: '1.25%',
        churnRate: '0.54%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Home Loan',
        sale: '153',
        revenue: '$202.20',
        acqrate: '2.25%',
        churnRate: '0.74%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Regular Savings Account',
        sale: '805',
        revenue: '$20.80',
        acqrate: '1.25%',
        churnRate: '0.54%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Home Loan',
        sale: '153',
        revenue: '$202.20',
        acqrate: '2.25%',
        churnRate: '0.74%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Regular Savings Account',
        sale: '805',
        revenue: '$20.80',
        acqrate: '1.25%',
        churnRate: '0.54%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Home Loan',
        sale: '153',
        revenue: '$202.20',
        acqrate: '2.25%',
        churnRate: '0.74%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Regular Savings Account',
        sale: '805',
        revenue: '$20.80',
        acqrate: '1.25%',
        churnRate: '0.54%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Home Loan',
        sale: '153',
        revenue: '$202.20',
        acqrate: '2.25%',
        churnRate: '0.74%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
    {
        product: 'Fixed-Rate Mortgage',
        sale: '32',
        revenue: '$22.50',
        acqrate: '1.55%',
        churnRate: '0.50%',
        icon: <img src={Arrow} alt="Arrow" />
    },
]