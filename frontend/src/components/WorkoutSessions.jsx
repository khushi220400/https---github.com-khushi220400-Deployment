import React from 'react'

const WorkoutSessions = () => {
    return (
        <section className='workout_session'>
            <div className='wrapper'>
                <h1>TOP WORKOUT SESSION</h1>
                <p>
                    <h1>Strength Training</h1>
                    Boost your strength and build muscle with our comprehensive strength training programs. From free weights to resistance machines, we have everything you need to get stronger.

                    <h1>Cardio Workouts</h1>
                    Improve your cardiovascular health with our variety of cardio workouts. Choose from treadmills, elliptical machines, cycling, and more to keep your heart pumping and calories burning.

                    <h1>Flexibility and Mobility</h1>
                    Enhance your flexibility and mobility with our specialized programs. Stretching and mobility exercises help prevent injuries and improve your range of motion, keeping you agile and active.

                   <h1> Functional Training</h1>
                   Train your body for everyday activities with our functional training sessions. These workouts focus on improving your overall strength, balance, and coordination.


                </p>
                <img src='/work.jpg' alt='workout' />

            </div>
            <div className='wrapper'>
                <h1>FEATURED BOOTCAMP</h1>
                
                <div className='bootcamps'>
                    <div>
                        <h4>High-Intensity Bootcamp
                        </h4>
                        <p>Join our high-intensity bootcamp sessions for a challenging and exhilarating workout experience. These classes are designed to push your limits and help you achieve your fitness goals faster.</p>
                    </div>
                    <div>
                        <h4>Outdoor Bootcamp
                        </h4>
                        <p>Enjoy the fresh air and scenic views with our outdoor bootcamp classes. Combining various exercises and training techniques, these sessions offer a dynamic and fun workout environment</p>
                    </div>
                    <div>
                        <h4>Beginner Bootcamp
                        </h4>
                        <p>Start your fitness journey with our beginner bootcamp sessions. These classes are perfect for those new to exercise, providing a supportive and encouraging environment to help you get started.</p>
                    </div>
                    <div>
                        <h4>Advanced Bootcamp
                        </h4>
                        <p>Take your fitness to the next level with our advanced bootcamp sessions. Designed for experienced fitness enthusiasts, these classes offer intense workouts that challenge your strength, endurance, and agility.

</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkoutSessions
