"use client";

import { useRentModal } from '@/hook';
import { Modal } from '.';
import { useMemo, useState } from 'react';
import { CategoryInput, Counter, CountrySelectValue, CountrySelected, Heading, ImageUpload, Input, categories } from '..';
import { FieldValues, useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}

export const RentModal = () => {
    const rentModal = useRentModal();
    const [step, setStep] = useState(STEPS.CATEGORY);
    const [isLoading, setIsLoading] = useState(false);

    const { setValue, watch, handleSubmit } = useForm<FieldValues>({
        defaultValues: {
            guestCount: 1,
            roomCount: 1,
            bathRoomCount: 1,
            price: 1,
            title: '',
            description: ''
        }
    });

    const category = watch('category');
    const location = watch('location');
    const guestCount = watch('guestCount');
    const roomCount = watch('roomCount');
    const bathRoomCount = watch('bathRoomCount');

    const Map = useMemo(() => dynamic(() => import('../Map'), {
        ssr: false
    }), []);

    const setCustomValue = (id: string, value: string | number | CountrySelectValue) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        });
    };

    const onBack = () => {
        if (step > STEPS.CATEGORY) {
            setStep((value) => value - 1);
        }
    };

    const onNext = async () => {
        if (step === STEPS.PRICE) {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));

            setIsLoading(false); 
            rentModal.onClose(); 
        } else {
            setStep((value) => value + 1);
        }
    };

    const actionLabel = useMemo(() => {
        return step === STEPS.PRICE ? 'Create' : 'Next';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        return step === STEPS.CATEGORY ? undefined : 'Back';
    }, [step]);

    let bodyContent = (
        <div className='flex flex-col'>
            <Heading title='¿Quieres disfrutar de los mejores lugares de Airbnb?' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-1 mx-h-[50vh] overflow-y-auto'>
                {categories.map((items) => (
                    <div key={items.label} className='col-span-1'>
                        <CategoryInput
                            onClick={(category) => setCustomValue('category', category)}
                            selected={category === items.label}
                            label={items.label}
                            icon={items.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    if (step === STEPS.LOCATION) {
        bodyContent = (
            <div className='gap-2'>
                <Heading title='¿Cuál es el lugar de residencia?' />
                <CountrySelected
                    value={location}
                    onChange={(value) => setCustomValue('location', value)}
                />
                <Map center={location?.latlng} />
            </div>
        );
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className='flex flex-col gap-5'>
                <Heading title='Comparte lo que quieres hacer con los demás' />
                <Counter
                    title='Guest'
                    subtitle='How many guests do you allow?'
                    value={guestCount}
                    onChange={(value) => setCustomValue('guestCount', value)}
                />
                <hr />
                <Counter
                    title='Room'
                    subtitle='How many rooms do you have?'
                    value={roomCount}
                    onChange={(value) => setCustomValue('roomCount', value)}
                />
                <hr />
                <Counter
                    title='BathRoom'
                    subtitle='How many bathrooms do you have?'
                    value={bathRoomCount}
                    onChange={(value) => setCustomValue('bathRoomCount', value)}
                />
            </div>
        );
    }

    if (step === STEPS.IMAGES) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading title='Add a photo for your place' />
                <ImageUpload />
            </div>
        );
    }

    if (step === STEPS.DESCRIPTION) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading title='How would you describe your place?' />
                <Input
                    id='title'
                    label='Title'
                    disabled={isLoading}
                />
                <hr />
                <Input
                    id='description'
                    label='Description'
                    disabled={isLoading}
                />
            </div>
        );
    }

    if (step === STEPS.PRICE) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading title='What is your price?' />
                <Input
                    id='number'
                    type='number'
                    disabled={isLoading}
                />
            </div>
        );
    }

    return (
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={handleSubmit(onNext)}
            title='Airbnb es tu casa'
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            body={bodyContent}
        />
    );
};