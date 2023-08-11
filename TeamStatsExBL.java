package enlj.p106trading.mssqlv51.p10651soccer.ssteamstatsex.logics;

import java.sql.*;
import org.w3c.dom.*;

import enlj.projenv.logics.*;
import enlj.webenv.logics.*;
import enlj.projenv.mssql.*;
import enlj.webenv.utils.*;
import enlj.p106trading.mssqlv51.resource.logics.*;

import enlj.p106trading.mssqlv51.resource.module.m10651.dleaguetable.anormaltable.logics.*;
import enlj.p106trading.mssqlv51.resource.module.m10651.estatistics.ehdpresultstats.logics.*;

public class TeamStatsExBL extends MSELogic
{
    /* Module Id */
    private final String kModuleId = "106510325";    	
    
	/* Task Ids */
	private final String kInitData	    = "10651032501";
	private final String kSeasons	    = "10651032504";
	private final String kTeams	        = "10651032505";
 	private final String kTeamStatsEx   = "10651032506";
 	
	/* Server Row Names */
    private final String kSR_Leagues    = "sr1";
    private final String kSR_Seasons    = "sr2";
    private final String kSR_Teams      = "sr3";

	/* Client Row Names */
    private final String kCR_LeagueId       = "cr1";
    private final String kCR_Teams          = "cr2";
    private final String kCR_LeagueTable    = "cr3";
    private final String kCR_Team_RS        = "cr4";
    private final String kCR_League_RS      = "cr5";

	/* Status Ids */		
	private final String T1_FunctionPM	= "101";
	private final String T1_Leagues     = "102";
	
	private final String T4_Seasons = "401";
	private final String T5_Teams   = "501";

    /* Seasons Field */
    private final int f_SLeagueId = 0;
    
    /* Teams Fields */
    private final int f_TLeagueId = 0;
    private final int f_TSeasonId = 1;
    
   	public TeamStatsExBL ()
	{
		super ();		
	}
	
	/**
        A template method which has been extended from MSELogic.

        @see enlj.component.resource.logics.MSELogic#executeTask(Document oDocument, String oTaskId).
    */   
	public String executeTask (Document oDocument, String oTaskId)
	{		
		String oXMLString = "";
		setParams(oDocument);			

		if (oTaskId.equals (kInitData))
        {
            oXMLString = getInitData ();
        }
        else if (oTaskId.equals (kSeasons))
        {
            oXMLString = getSeasons ();
        }
		else if (oTaskId.equals (kTeams))
        {
            oXMLString = getTeamData ();
        }
        else if (oTaskId.equals (kTeamStatsEx))
        {
            oXMLString = getTeamStatsData ();
        }
        
		return oXMLString;
	}		
    
	private String getInitData ()
    {
        StringBuffer oBuffer = new StringBuffer ();
        oBuffer.append (getFunctionPM (getUserId (), kModuleId, T1_FunctionPM));
        oBuffer.append (SoccerUtil.getLeagues_Soc (this, T1_Leagues, kSR_Leagues, ConstantsUtil.kFE_ChooseOne));        
                
        return oBuffer.toString ();
    }          
	
    private String getSeasons ()
    {
		DBConnector10651 oConnector = new DBConnector10651 ();        
		Statement oStatement = null;
		ResultSet oResultSet = null;
		
		StringBuffer oBuffer = new StringBuffer ();
		
		String [] arrInfo = getParams (kCR_LeagueId);
		String oLeagueId = arrInfo [f_SLeagueId];

        try
        {			
			String oSQL =
				" Select en_0651b06_seasoninfo_soc.seasonid As id, " +
				   " en_0651b06_seasoninfo_soc.seasonname_" + getLanguage () + " As name, " +
				   " Convert (nvarchar, en_0651b06_seasoninfo_soc.startdate, 103) As startdate, " +
				   " Convert (nvarchar, en_0651b06_seasoninfo_soc.enddate, 103) As enddate, " +
				   " en_0651b06_seasoninfo_soc.startdate As orderdate, " +
				   " 1 As orderid " +
				" From en_0651b06_seasoninfo_soc, en_0651b01_leagueinfo_soc " +
				" Where en_0651b06_seasoninfo_soc.leagueid = en_0651b01_leagueinfo_soc.leagueid And " +				   
				   " en_0651b01_leagueinfo_soc.leagueid = " + oLeagueId +
				" Union All " +
				" Select 0 As id, " +
				   " en_0651z00_firstelement.name_" + getLanguage () + " As name, " +
				   " Convert (nvarchar, GetDate (), 103) As startdate, " +
				   " Convert (nvarchar, GetDate (), 103) As enddate, " +
				   " GetDate () As orderdate, " +
				   " 0 As orderid " +
				" From en_0651z00_firstelement " +
				" Where en_0651z00_firstelement.id = " + ConstantsUtil.kFE_ChooseOne +
				" Order By orderid, orderdate Desc, name ";

			oStatement = oConnector.getStatement ();

			oResultSet = oConnector.executeQuery (oSQL, oStatement);
			if (oResultSet != null)   
			{
			    oBuffer.append (toXMLString (oResultSet, kSR_Seasons)); 
				oBuffer.append (getStatusXML (T4_Seasons, 1, "TeamStatsExBL:getSeasons:Successfull"));
			}
			else
				oBuffer.append (getStatusXML (T4_Seasons, -1, "TeamStatsExBL:getSeasons:UnSuccessfull"));
        }
        catch (Exception oException)
        {
            oBuffer.append (getStatusXML (T4_Seasons, -1, "TeamStatsExBL:getSeasons:" + oException.toString ()));
            log (oBuffer.toString ());			
        }
        
        finally
        {
			try {oResultSet.close ();} catch (Exception oException) {oException.toString ();}
			oResultSet = null;

			try {oStatement.close ();} catch (Exception oException) {oException.toString ();}
			oStatement = null;
			
			oConnector.close ();
			oConnector = null;
        }

        return oBuffer.toString ();
    }

    private String getTeamData ()
    {
        return getTeams ();
    }     
	
	private String getTeams ()
    {
		DBConnector10651 oConnector = new DBConnector10651 ();        
		Statement oStatement = null;
		ResultSet oResultSet = null;
		
		StringBuffer oBuffer = new StringBuffer ();
		
		String [] arrInfo = getParams (kCR_Teams);
		int nLeagueId = convertToInt (arrInfo [f_TLeagueId]);
		int nSeasonId = convertToInt (arrInfo [f_TSeasonId]);

        try
        {			
			String oSQL =
				" Select Distinct en_0651b03_teaminfo_soc.teamid As id, " +
					" en_0651b03_teaminfo_soc.teamname_" + getLanguage () + " As name, " +
					" 1 As orderid " +
				" From en_0651b03_teaminfo_soc, en_0651b08_scheduleinfo_soc, en_0651b06_seasoninfo_soc " +
				" Where en_0651b08_scheduleinfo_soc.leagueid = en_0651b06_seasoninfo_soc.leagueid And " +
					" en_0651b08_scheduleinfo_soc.leagueid = " + nLeagueId + " And " +
					" (en_0651b08_scheduleinfo_soc.ateamid = en_0651b03_teaminfo_soc.teamid OR " +
						" en_0651b08_scheduleinfo_soc.bteamid = en_0651b03_teaminfo_soc.teamid) And " +
					" en_0651b06_seasoninfo_soc.seasonid = " + nSeasonId + " And " +
					" en_0651b08_scheduleinfo_soc.scheduledate Between " +					
						" en_0651b06_seasoninfo_soc.startdate And en_0651b06_seasoninfo_soc.enddate " +
				" Union All " +
				" Select 0 As id, " +
				   " en_0651z00_firstelement.name_" + getLanguage () + " As name, " +
				   " 0 As orderid " +
				" From en_0651z00_firstelement " +
				" Where en_0651z00_firstelement.id = " + ConstantsUtil.kFE_ChooseOne +
				" Order By orderid, name ";

			oStatement = oConnector.getStatement ();

			oResultSet = oConnector.executeQuery (oSQL, oStatement);
			if (oResultSet != null)   
			{
			    oBuffer.append (toXMLString (oResultSet, kSR_Teams)); 
				oBuffer.append (getStatusXML (T5_Teams, 1, "TeamStatsExBL:getTeams:Successfull"));
			}
			else
				oBuffer.append (getStatusXML (T5_Teams, -1, "TeamStatsExBL:getTeams:UnSuccessfull"));
        }
        catch (Exception oException)
        {
            oBuffer.append (getStatusXML (T5_Teams, -1, "TeamStatsExBL:getTeams:" + oException.toString ()));
            log (oBuffer.toString ());			
        }
        
        finally
        {
			try {oResultSet.close ();} catch (Exception oException) {oException.toString ();}
			oResultSet = null;

			try {oStatement.close ();} catch (Exception oException) {oException.toString ();}
			oStatement = null;
			
			oConnector.close ();
			oConnector = null;
        }

        return oBuffer.toString ();
    }
    
    private String getTeamStatsData ()
    {
        StringBuffer oBuffer = new StringBuffer ();
        oBuffer.append (getTeamResultStats ());
        oBuffer.append (getLeagueResultStats ());
        oBuffer.append (getLeagueTable ());
        
        return oBuffer.toString ();
    }  
    
    private String getTeamResultStats ()
    {
		StringBuffer oBuffer = new StringBuffer ();

		String [] arrInfo = getParams (kCR_Team_RS);				
		HdpResultStatsObj oLogic = new HdpResultStatsObj (getDocument ());
		oBuffer.append (oLogic.getHdpResultStats (SportUtil.kS_Soccer, arrInfo));		

        return oBuffer.toString ();
    }

    private String getLeagueResultStats ()
    {
		StringBuffer oBuffer = new StringBuffer ();

		String [] arrInfo = getParams (kCR_League_RS);				
		HdpResultStatsObj oLogic = new HdpResultStatsObj (getDocument ());
		oBuffer.append (oLogic.getHdpResultStats (SportUtil.kS_Soccer, arrInfo));		

        return oBuffer.toString ();
    }
    	
	private String getLeagueTable ()
    {
		StringBuffer oBuffer = new StringBuffer ();

		String [] arrInfo = getParams (kCR_LeagueTable);				
		LeagueTableObj oLogic = new LeagueTableObj (getDocument ());
		oBuffer.append (oLogic.getLeagueTable (SportUtil.kS_Soccer, arrInfo));		

        return oBuffer.toString ();
	}
	
	public void log (String oMessage)
	{
//		logMessage (oMessage);
	}
}