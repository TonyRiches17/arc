import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";

function Calendar() {
  // These are the packages you need to install to use the calendar and its functions
// npm install @fullcalendar/react
// npm install @fullcalendar/daygrid
// npm install @fullcalendar/timegrid
// npm install @fullcalendar/list
// npm install @fullcalendar/interaction

  return(
    <div className="calendar">
      <FullCalendar
  plugins={[
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    interactionPlugin,
  ]}
  initialView="dayGridMonth"
  headerToolbar={{
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
  }}
/>
    </div>
  )
}

export default Calendar;