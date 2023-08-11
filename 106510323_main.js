/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team(s) H/A Goal %</font></H5>    
*/

/**
    Creates an object of Team(s) H/A Goal % and initializes all member variables.
	Invokes init function.
    
    @author     Mohith
    @version    1.0.0               
*/ 
function onload_106510323 ()
{
    Constructor_106510323 ();
	du_datePicker ();
    init_106510323 ();    
}

function unload_106510323 ()
{	
    UDModule.PROJ.closeHelp ();	
}

function init_106510323 ()
{
	UDModule.PROJ.loadDefaultTheme ();
    initData_106510323 ();
    UDModule.COMP.setFocus_DD ("cbLeagues");	
}

function initData_106510323 ()
{ 
    var xmlDoc = UDModule.PROJ.processRequest (getInitParam_106510323 ());
	if (UDModule.PROJ.isValidStatus (xmlDoc))    
    {
        if (isValidStatus_T1_106510323 (xmlDoc))
        {
            UDModule.PROJ.setFunction_PM (xmlDoc);
			fillLeagues_106510323 (xmlDoc);
        }
    }

	UDModule.COMP.getElement ("txtFromDate").value = UDModule.DATE.getCurrentDate ();
	UDModule.COMP.getElement ("txtToDate").value = UDModule.DATE.getCurrentDate ();
}

function fillLeagues_106510323 (xmlDoc)
{
    var nodeList = xmlDoc.getElementsByTagName (kSR_Leagues);
    UDModule.COMP.fillDropDown_ST (nodeList, "cbLeagues", 1, 0, 30);
}

function fillSeasonMod2_106510323 ()
{
	m_arrSeasons = new Array ();
	var xmlDoc = UDModule.PROJ.processRequest (getSeasonParam_106510323 ());
	if (UDModule.PROJ.isValidStatus (xmlDoc))    
	{
		if (isValidStatus_T4_106510323 (xmlDoc))
		{                   			                 
			fillSeason_106510323 (xmlDoc);

			var nodeList = xmlDoc.getElementsByTagName (kSR_Seasons);
			m_arrSeasons = UDModule.DOM.convertNodesToArray (nodeList);
		}
	}
}

function fillSeason_106510323 (xmlDoc)
{
    var nodeList = xmlDoc.getElementsByTagName (kSR_Seasons);
    UDModule.COMP.fillDropDown (nodeList, "cbSeason", 1, 0);
}

function getLeagueId_106510323 ()
{
    return parseInt (UDModule.COMP.getElement ("cbLeagues").value);
}

function getSeasonId_106510323 ()
{
    return parseInt (UDModule.COMP.getElement ("cbSeason").value);
}

function getLiveStatusId_106510323 ()
{
    return parseInt (UDModule.COMP.getElement ("cbLiveStatus").value);
}

function getFromDate_106510323 ()
{
	return UDModule.COMP.getElement ("txtFromDate").value;
}

function getToDate_106510323 ()
{
	return UDModule.COMP.getElement ("txtToDate").value;
}

function getSeasonNode_106510323 ()
{
	var arrInfo = null;

	for (var nIndex = 0; nIndex < m_arrSeasons.length; nIndex++)
	{
		var arrValues = m_arrSeasons [nIndex];
		var nSeasonId = arrValues [0];
		
		if (nSeasonId == getSeasonId_106510323 ())
		{
			arrInfo = arrValues;
			break;
		}
	}
	
	return arrInfo;
}

function getProcessRequest_106510323 (oParam)
{
    return UDModule.PROJ.processRequest (oParam);
}

function isValidData_106510323 ()
{
	var bStatus = false;
	
	if (getLeagueId_106510323 () == -1)
	{
		alert (m_arrMessages [iM_League])
		UDModule.COMP.setFocus_DD ("cbLeagues");
	}
	else if (getSeasonId_106510323 () == 0)
	{
		alert (m_arrMessages [iM_Season])
		UDModule.COMP.setFocus_DD ("cbSeason");
	}	
	else if (getSeasonId_106510323 () > 0)
	{
		var arrNode = getSeasonNode_106510323 ();
		var oStartDate = arrNode [iS_StartDate];
		var oEndDate = arrNode [iS_EndDate];

		var oFromDate = getFromDate_106510323 ();
		var oToDate = getToDate_106510323 ();

		if (UDModule.DATE.getDateDiff_Days (oStartDate, oFromDate) < 0 || UDModule.DATE.getDateDiff_Days (oEndDate, oToDate) > 0)
			alert (m_arrMessages [iM_DateRange] + " " + oStartDate + " - " + oEndDate);	
		else
			bStatus = true;
	}
	else
		bStatus = true;

	return bStatus;
}

function clearViews_106510323 ()
{
	UDModule.COMP.replaceDynamicHtml ("tdView_HO", "");
	UDModule.COMP.replaceDynamicHtml ("tdView_AO", "");
	UDModule.COMP.replaceDynamicHtml ("tdView_HD", "");
	UDModule.COMP.replaceDynamicHtml ("tdView_AD", "");
}
