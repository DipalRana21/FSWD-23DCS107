// #include<iostream>
// using namespace std;
// #include <vector>
// #include <iomanip>

// class Doctor{
// public:
// int DoctorId;
//      string name,department;

// Doctor(int id, string name, string dept) {
//         DoctorId = id;
//         Name = name;
//         Department = dept;
//     }
// };

// class Appointment{

// public:

// int AppointmentId,DoctorId;
// string PatientName;

//  Appointment(int aid, string pname, int did, string date) {
//         AppointmentId = aid;
//         PatientName = pname;
//         DoctorId = did;
//         AppointmentDate = date;
//     }

// };

// class HospitalSystem{

// private:
//     vector<Doctor> doctors;
//     vector<Appointment> appointments;
//     int appointment;

// public:
//     HospitalSystem()
//     {
// appointment=1;
// AddDefaultDoctors();
//     }

// void AddDefaultDoctors()
//     {
//         doctors.push_back(Doctor(107, "Dr. Dipal", "Cardiology"));
//         doctors.push_back(Doctor(102, "Dr. Arham", "Neurology"));
//         doctors.push_back(Doctor(103, "Dr. Virat", "Orthopedics"));
//     }

//  void ViewDoctors()
//     {
//         cout << "Available Doctors:\n";
//         for (auto &doc : doctors)
//         {
//             cout << "Doctor ID: " << doc.DoctorId
//                  << ", Name: " << doc.Name
//                  << ", Department: " << doc.Department << endl;
//         }
//     }



// };

// void BookAppointment(name,did,date)
// {

// }

// int main()
// {

//     int DoctorId,noofAppontments;
// string name,date,pname;

// int PatientId,
//     cin>>DoctorId;
//     cin>>name;
//     cin>>date;
//     cin>>pname;

//     class Doctor = new obj();

// return 0;
// }

#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;


class Doctor
{
public:
    int DoctorId;
    string Name;
    string Department;

    Doctor(int id, string name, string dept)
    {
        DoctorId = id;
        Name = name;
        Department = dept;
    }
};


class Appointment
{
public:
    int AppointmentId;
    string PatientName;
    int DoctorId;
    string AppointmentDate;

    Appointment(int aid, string pname, int did, string date)
    {
        AppointmentId = aid;
        PatientName = pname;
        DoctorId = did;
        AppointmentDate = date;
    }
};

class HospitalSystem
{
private:
    vector<Doctor> doctors;
    vector<Appointment> appointments;
    int appointmentCounter;

public:
    HospitalSystem()
    {
        appointmentCounter = 1;
        AddDefaultDoctors();
    }

    void AddDefaultDoctors()
    {
        doctors.push_back(Doctor(101, "Dr. Dipal", "Cardiology"));
        doctors.push_back(Doctor(102, "Dr. Arham", "Neurology"));
        doctors.push_back(Doctor(103, "Dr. Virat", "Orthopedics"));
    }

    void ViewDoctors()
    {
        cout << "Available Doctors:\n";
        for (auto &doc : doctors)
        {
            cout << "Doctor ID: " << doc.DoctorId
                 << ", Name: " << doc.Name
                 << ", Department: " << doc.Department << endl;
        }
    }



    void BookAppointment()
    {
        string pname, date;
        int did;

        cout << "Enter Patient Name: ";
        cin.ignore();
        getline(cin, pname);

        cout << "Enter Doctor ID: ";
        cin >> did;

     

        cout << "Enter Appointment Date (dd-mm-yyyy): ";
        cin >> date;

       

        appointments.push_back(Appointment(appointmentCounter, pname, did, date));
        cout << "Booking Successful!\n";
        cout << "Appointment ID: " << appointmentCounter
             << ", Patient: " << pname
             << ", Doctor ID: " << did
             << ", Date: " << date << endl;

        appointmentCounter++;
    }

    void ViewAppointments()
    {
        int did;
        string date;
        cout << "Enter Doctor ID: ";
        cin >> did;


        cout << "Enter Date: ";
        cin >> date;

        bool found = false;
        cout << "Appointments for Doctor ID " << did << " on " << date << ":\n";
        for (auto &app : appointments)
        {
            if (app.DoctorId == did && app.AppointmentDate == date)
            {
                cout << "Appointment ID: " << app.AppointmentId
                     << ", Patient: " << app.PatientName << endl;
                found = true;
            }
        }
        if (!found)
        {
            cout << "No appointments found.\n";
        }
    }
};

int main()
{
    HospitalSystem hs;
    int choice;

    do
    {
        cout << "\n= Hospital Appointment System =\n";
        cout << "1. View all available doctors\n";
        cout << "2. Book appointment\n";
        cout << "3. View appointments by doctor and date\n";
        cout << "4. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            hs.ViewDoctors();
            break;
        case 2:
            hs.BookAppointment();
            break;
        case 3:
            hs.ViewAppointments();
            break;
        case 4:
            cout <<"Exiting program.\n";
            break;
        default:
            cout <<"Invalid choice. Try again.\n";
        }
    } while (choice != 4);

    return 0;
}
