const createDoctor = (name, specialty, address ) => ({
    "doctorName": name,
    "specialty": specialty,
    "address": address
})

const doctor = createDoctor("Danny", "Family Practice", "202 Blue Sky Way")

export default doctor